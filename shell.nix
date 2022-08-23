with import <nixpkgs> { };

mkShell {

  name = "env";
  buildInputs = [
    figlet nodejs cmake check wasmtime wabt binaryen
  ];

  shellHook = ''
    figlet -- '-:hello-ts:-'
  '';

}