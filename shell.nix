{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = with pkgs; [
    zola
    git
  ];

  shellHook = ''
    echo "MeetBall Handbook Development Environment"
    echo "Zola version: $(zola --version)"
    echo ""
    echo "Commands:"
    echo "  zola serve    - Start development server at http://127.0.0.1:1111"
    echo "  zola build    - Build the site for production"
    echo "  zola check    - Check for errors without building"
  '';
}