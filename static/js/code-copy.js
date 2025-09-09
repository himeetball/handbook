// Code block copy functionality for Meetball Handbook
// TODO: Code blocks are being rendered line-by-line with individual <span> elements
// which makes text selection awkward. This is how Duckquill theme does it too.
// See GitHub issue: https://github.com/thesummeet/handbook/issues/XXX
// We should investigate better code block rendering that treats them as unified blocks
document.addEventListener('DOMContentLoaded', function() {
    // Wrap all pre elements in containers and add copy buttons
    initializeCodeBlocks();
});

function initializeCodeBlocks() {
    const preElements = document.querySelectorAll('pre:not(.no-copy)');
    
    preElements.forEach(function(pre) {
        // Skip if already processed
        if (pre.closest('.code-block-container')) {
            return;
        }
        
        // Create wrapper container
        const container = document.createElement('div');
        container.className = 'code-block-container';
        
        // Insert container before pre element
        pre.parentNode.insertBefore(container, pre);
        
        // Move pre element inside container
        container.appendChild(pre);
        
        // Create and add copy button
        const copyButton = createCopyButton(container);
        container.appendChild(copyButton);
    });
}

function createCopyButton(container) {
    const button = document.createElement('button');
    button.className = 'copy-button';
    button.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 3H5C3.9 3 3 3.9 3 5V17C3 18.1 3.9 19 5 19H7V21C7 22.1 7.9 23 9 23H19C20.1 23 21 22.1 21 21V9C21 7.9 20.1 7 19 7H17V5C17 3.9 16.1 3 15 3H19ZM19 21H9V9H19V21ZM15 5V7H9C7.9 7 7 7.9 7 9V17H5V5H15Z"/>
        </svg>
    `;
    button.title = 'Copy code to clipboard';
    button.setAttribute('aria-label', 'Copy code to clipboard');
    
    button.addEventListener('click', function(e) {
        e.preventDefault();
        copyCodeToClipboard(button, container);
    });
    
    return button;
}

async function copyCodeToClipboard(button, container) {
    const pre = container.querySelector('pre');
    const code = pre.querySelector('code');
    
    // Get the code text - handle both single code block and multiple lines
    let codeToCopy;
    if (code) {
        codeToCopy = code.textContent || code.innerText;
    } else {
        codeToCopy = pre.textContent || pre.innerText;
    }
    
    // Clean up the text (remove extra whitespace at start/end)
    codeToCopy = codeToCopy.trim();
    
    try {
        // Try modern Clipboard API first
        if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(codeToCopy);
            showCopySuccess(button);
        } else {
            // Fallback to older method
            fallbackCopyToClipboard(codeToCopy, button);
        }
    } catch (err) {
        console.warn('Copy to clipboard failed:', err);
        fallbackCopyToClipboard(codeToCopy, button);
    }
}

function fallbackCopyToClipboard(text, button) {
    // Create temporary textarea for copying
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.left = '-999999px';
    textarea.style.top = '-999999px';
    document.body.appendChild(textarea);
    
    try {
        textarea.focus();
        textarea.select();
        document.execCommand('copy');
        showCopySuccess(button);
    } catch (err) {
        console.warn('Fallback copy failed:', err);
        showCopyError(button);
    } finally {
        document.body.removeChild(textarea);
    }
}

function showCopySuccess(button) {
    const originalHTML = button.innerHTML;
    button.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z"/>
        </svg>
    `;
    button.classList.add('copied');
    
    // Reset button after 2 seconds
    setTimeout(function() {
        button.innerHTML = originalHTML;
        button.classList.remove('copied');
    }, 2000);
}

function showCopyError(button) {
    const originalHTML = button.innerHTML;
    button.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22S22 17.52 22 12S17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z"/>
        </svg>
    `;
    button.style.backgroundColor = '#dc2626';
    button.style.color = 'white';
    
    // Reset button after 2 seconds
    setTimeout(function() {
        button.innerHTML = originalHTML;
        button.style.backgroundColor = '';
        button.style.color = '';
    }, 2000);
}