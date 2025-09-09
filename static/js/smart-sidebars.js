// Smart sidebar scrolling for Meetball Handbook
document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.querySelector('.docs-sidebar .docs-links');
    const toc = document.querySelector('.docs-toc .page-links');
    
    if (!sidebar && !toc) return;
    
    function updateSidebarPositions() {
        // Get page scroll info
        const scrollTop = window.scrollY;
        const documentHeight = document.documentElement.scrollHeight;
        const windowHeight = window.innerHeight;
        const scrollBottom = scrollTop + windowHeight;
        
        // Calculate scroll progress (0 to 1)
        const maxScroll = documentHeight - windowHeight;
        const scrollProgress = maxScroll > 0 ? scrollTop / maxScroll : 0;
        
        // Update sidebar if it exists
        if (sidebar) {
            updateSidebarPosition(sidebar, scrollProgress);
        }
        
        // Update TOC if it exists
        if (toc) {
            updateSidebarPosition(toc, scrollProgress);
        }
    }
    
    function updateSidebarPosition(element, scrollProgress) {
        const container = element.closest('.docs-sidebar, .docs-toc');
        if (!container) return;
        
        // Get dimensions
        const containerHeight = container.clientHeight;
        const contentHeight = element.scrollHeight;
        
        // If content fits entirely, no need to adjust
        if (contentHeight <= containerHeight) {
            element.style.transform = 'translateY(0)';
            return;
        }
        
        // Calculate how much we can move the content
        const maxTranslateY = contentHeight - containerHeight;
        
        // Apply smooth transition based on scroll progress
        const translateY = -scrollProgress * maxTranslateY;
        element.style.transform = `translateY(${translateY}px)`;
    }
    
    // Add CSS for smooth transitions
    function initializeSidebarStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .docs-sidebar .docs-links,
            .docs-toc .page-links {
                transition: transform 0.1s ease-out;
                will-change: transform;
            }
            
            .docs-sidebar,
            .docs-toc {
                overflow: hidden;
            }
        `;
        document.head.appendChild(style);
    }
    
    // Throttle scroll events for performance
    let ticking = false;
    function onScroll() {
        if (!ticking) {
            requestAnimationFrame(() => {
                updateSidebarPositions();
                ticking = false;
            });
            ticking = true;
        }
    }
    
    // Initialize
    initializeSidebarStyles();
    
    // Set initial positions
    updateSidebarPositions();
    
    // Listen for scroll events
    window.addEventListener('scroll', onScroll, { passive: true });
    
    // Handle window resize
    window.addEventListener('resize', updateSidebarPositions, { passive: true });
});