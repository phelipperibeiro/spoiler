export const RED = "\x1b[0;31m";
export const GREEN = "\x1b[0;32m";
export const BLUE = "\x1b[0;34m";
export const YELLOW = "\x1b[1;33m";
export const CYAN = "\x1b[0;36m";
export const DIM = "\x1b[2m";
export const NC = "\x1b[0m";

export function showBanner() {
  console.log(RED);
  console.log("");
  console.log("███████╗██████╗  ██████╗ ██╗██╗     ███████╗██████╗ ");
  console.log("██╔════╝██╔══██╗██╔═══██╗██║██║     ██╔════╝██╔══██╗");
  console.log("███████╗██████╔╝██║   ██║██║██║     █████╗  ██████╔╝");
  console.log("╚════██║██╔═══╝ ██║   ██║██║██║     ██╔══╝  ██╔══██╗");
  console.log("███████║██║     ╚██████╔╝██║███████╗███████╗██║  ██║");
  console.log("╚══════╝╚═╝      ╚═════╝ ╚═╝╚══════╝╚══════╝╚═╝  ╚═╝");
  console.log(NC);
  console.log(RED);
  console.log("                         __");
  console.log('                   _.--""  |');
  console.log("    .----.     _.-'   |/\\| |.--.");
  console.log("    |    |__.-'   _________|  |_)  _______________");
  console.log('    |  .-""-.""""" ___,    `----\'"))   __   .-""-.""""--._');
  console.log("    '-' ,--. `    |    | .-----.     |:.| ' ,--. `      _`.");
  console.log(
    '     ( (    ) ) __|    |__\\\\|//_..--  \\/ ( (    ) )--._".-.}',
  );
  console.log("      . `--' ;\\__________________..--------. `--' ;--------'");
  console.log("       `-..-'                               `-..-'");
  console.log(NC);
  console.log(
    `${DIM}Framework Spoiler para desenvolvimento assistido por IA${NC}`,
  );
  console.log("");
  console.log("");
}
