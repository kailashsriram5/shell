// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 5 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display summary.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}. 
Welcome to the course website!
More about me:
'sumfetch' - short summary.
'readme' - my github readme.`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Searching duckduckgo for ${args.join(' ')}...`;
};

// export const stackoverflow = async (args: string[]): Promise<string> => {
//   window.open(`https://stackoverflow.com/?q=${args.join(' ')}`);
//   return `Searching stackoverflow for ${args.join(' ')}...`;
// };

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `a
bunch
of
fake
directories`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

// make it open the details of the command help page
// from the KB.
// TODO: create commands for pwd, cd, mkdir, rmdir, mv, cp, rm
// clang, gcc, compile
export const cd = async (args: string[]): Promise<string> => {
  return `cd command is useful for change directory`;
};

// Banner
export const banner = (args?: string[]): string => {
  return `

   ██████╗███████╗███████╗███╗   ██╗ ██╗ ██████╗  ██╗ ██╗
  ██╔════╝██╔════╝██╔════╝████╗  ██║███║██╔═████╗███║███║
  ██║     ███████╗█████╗  ██╔██╗ ██║╚██║██║██╔██║╚██║╚██║
  ██║     ╚════██║██╔══╝  ██║╚██╗██║ ██║████╔╝██║ ██║ ██║
  ╚██████╗███████║███████╗██║ ╚████║ ██║╚██████╔╝ ██║ ██║
   ╚═════╝╚══════╝╚══════╝╚═╝  ╚═══╝ ╚═╝ ╚═════╝  ╚═╝ ╚═╝
                                                         

Type 'help' to see the list of available commands.
Type 'sumfetch' to display summary.
Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the Github repository.
`;
};

// CSEN1011 manual pages
export const man = async (args: string[]): Promise<string> => {
  window.open(`${config.manual_url}`);

  return 'Opening CSEN1011 Manual Pages...';
};

// Karel Game
export const one_karel_game = async (args: string[]): Promise<string> => {
  window.open(`${config.karel_url}`);

  return 'Opening Karel Game...';
};

// Karel Game
export const two_karel_game_te = async (args: string[]): Promise<string> => {
  window.open(`${config.karel_te_url}`);

  return 'Opening Telugu Karel Game...';
};

// 2048 Game
export const three_2048_game = async (args: string[]): Promise<string> => {
  window.open(`${config.game_2048}`);

  return 'Opening 2048 Game...';
};