{
  pkgs ? import <nixpkgs> { },
}:

pkgs.mkShell {
  buildInputs = with pkgs; [
    zola
    git
    python3
    gh
    ripgrep
  ];

  shellHook = ''
    echo "MeetBall Handbook Development Environment"
    echo "Zola version: $(zola --version)"
    echo "Python version: $(python3 --version)"
    echo ""
    echo "Commands:"
    echo "  zola serve              - Start development server at http://127.0.0.1:1111"
    echo "  zola build              - Build the site for production"
    echo "  zola check              - Check for errors without building"
    echo "  python3 scripts/fetch-github-data.py  - Fetch GitHub data for build"
  '';
}
