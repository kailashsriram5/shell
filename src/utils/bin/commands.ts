// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// About
// export const about = async (args: string[]): Promise<string> => {
//   return `Hi, I am ${config.name}. 
// Welcome to the course website!
// More about me:
// 'sumfetch' - short summary.
// 'readme' - my github readme.`;
// };

// About
export const about = async (args: string[]): Promise<string> => {
  return `
           ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▄                 
        ▄▓▓▀ ▄▓▓▀▓▓▓▀▓▓▄ ▀▀▓▓▄              
      ▓▓▀  ▄▓▀   ▐▓▓  ▀▓▓    ▓▓▄            
    ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓           -----------
   ▓▓     ▓▓▓    ▐▓▓    ▐▓▓     ▓▓           ABOUT
▐▓▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▓        ${config.name}
▐▓                                 ▐▓       爵 <u><a href="${config.repo}" target="_blank">Github repo</a></u>
▐▓        > C S E N 1 0 1 1        ▐▓       -----------
▐▓                                 ▐▓        CONTACT 
▐▓▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▓        <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
   ▓▓      ▐▓▓    ▓▓    ▐▓▓     ▓▓           <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓           -----------
      ▓▓▓   ▐▓▓   ▓▓   ▓▓▓   ▓▓▀             
        ▀▓▓▄▄ ▀▓▓▄▓▓▄▓▓▓▄▄▓▓▀               
            ▀▓▓▓▓▓▓▓▓▓▓▓▀▀                  

`;
};

// export const resume = async (args: string[]): Promise<string> => {
//   window.open(`${config.resume_url}`);
//   return 'Opening resume...';
// };

// Contact
// export const email = async (args: string[]): Promise<string> => {
//   window.open(`mailto:${config.email}`);
//   return `Opening mailto:${config.email}...`;
// };

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

// export const duckduckgo = async (args: string[]): Promise<string> => {
//   window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
//   return `Searching duckduckgo for ${args.join(' ')}...`;
// };

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

// export const ls = async (args: string[]): Promise<string> => {
//   return `a
// bunch
// of
// fake
// directories`;
// };

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

// make it open the details of the command help page
// from the KB.
// TODO: create commands for pwd, cd, mkdir, rmdir, mv, cp, rm
// clang, gcc, compile
// export const cd = async (args: string[]): Promise<string> => {
//   return `cd command is useful for change directory`;
// };

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
Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the Github repository.
`;
};

// CSEN1011 manual pages
export const man = async (args: string[]): Promise<string> => {
  window.open(`${config.manual_url}`);

  return 'Opening CSEN1011 Manual Pages...';
};

// CSEN1011 web pages
export const web = async (args: string[]): Promise<string> => {
  window.open(`${config.web_url}`);

  return 'Opening CSEN1011 Web Pages...';
};

// games karel, 2048, snake, 15
export const game = async (args: string[]): Promise<string> => {
  if (args.length != 1) {
    return 'Invalid arguments!\n\nUsage:\ngame snake\ngame 2048\ngame karel\ngame 15\n'
  }

  // karel game select
  if (args[0] == 'karel') {
    window.open(`${config.karel_url}`);
    return 'Opening karel game...';
  }
  
  // 2048 game select
  if (args[0] == '2048') {
    window.open(`${config.game_2048_url}`);
    return 'Opening 2048 game...';
  }

  // snake game select
  if (args[0] == 'snake') {
    window.open(`${config.game_snake_url}`);
    return 'Opening snake game...';
  }

  // snake game select
  if (args[0] == '15') {
    window.open(`${config.game_15_url}`);
    return 'Opening 15 game...';
  }

  return 'number of args: ' + String(args.length) + '\nCmd: game ' + args[0];
};