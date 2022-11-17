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
[ctrl+l]/clear: clear terminal.
`;
};

// Redirection
// export const repo = async (args: string[]): Promise<string> => {
//   window.open(`${config.repo}`);
//   return 'Opening Github repository...';
// };

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
▐▓            > C X R              ▐▓       -----------
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

// export const github = async (args: string[]): Promise<string> => {
//   window.open(`https://github.com/${config.social.github}/`);

//   return 'Opening github...';
// };

// export const linkedin = async (args: string[]): Promise<string> => {
//   window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

//   return 'Opening linkedin...';
// };

// Search
// export const google = async (args: string[]): Promise<string> => {
//   window.open(`https://google.com/search?q=${args.join(' ')}`);
//   return `Searching google for ${args.join(' ')}...`;
// };

// export const duckduckgo = async (args: string[]): Promise<string> => {
//   window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
//   return `Searching duckduckgo for ${args.join(' ')}...`;
// };

// Typical linux commands
// export const echo = async (args: string[]): Promise<string> => {
//   return args.join(' ');
// };

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
     CCCCCCCCCCCCCXXXXXXX       XXXXXXXRRRRRRRRRRRRRRRRR   
  CCC::::::::::::CX:::::X       X:::::XR::::::::::::::::R  
CC:::::::::::::::CX:::::X       X:::::XR::::::RRRRRR:::::R 
C:::::CCCCCCCC::::CX::::::X     X::::::XRR:::::R     R:::::R
C:::::C       CCCCCCXXX:::::X   X:::::XXX  R::::R     R:::::R
C:::::C                 X:::::X X:::::X     R::::R     R:::::R
C:::::C                  X:::::X:::::X      R::::RRRRRR:::::R 
C:::::C                   X:::::::::X       R:::::::::::::RR  
C:::::C                   X:::::::::X       R::::RRRRRR:::::R 
C:::::C                  X:::::X:::::X      R::::R     R:::::R
C:::::C                 X:::::X X:::::X     R::::R     R:::::R
C:::::C       CCCCCCXXX:::::X   X:::::XXX  R::::R     R:::::R
C:::::CCCCCCCC::::CX::::::X     X::::::XRR:::::R     R:::::R
CC:::::::::::::::CX:::::X       X:::::XR::::::R     R:::::R
  CCC::::::::::::CX:::::X       X:::::XR::::::R     R:::::R
     CCCCCCCCCCCCCXXXXXXX       XXXXXXXRRRRRRRR     RRRRRRR                                                                                                 

Type 'help' to see the list of available commands.
Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the Github repository.
`;
};

// CSEN1011 manual pages
export const man = async (args: string[]): Promise<string> => {
  
  if (args.length != 1) {
    return 'Invalid arguments!\n\nUsage:\nman get_int\nman get_string\n'
  }

  // which API
  if (args[0] == 'get_int') {
    window.open(`${config.manual_url}` + '/3/get_int');
    return 'Opening get_int Manual Page...';
  }
  
  if (args[0] == 'get_string') {
    window.open(`${config.manual_url}` + '/3/get_string');
    return 'Opening get_string Manual Page...';
  }

  return 'Invalid arguments!\n\nUsage:\nman get_int\nman get_string\n'

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
  return 'Invalid arguments!\n\nUsage:\ngame snake\ngame 2048\ngame karel\ngame 15\n'
};

// seniors_project ar
// seniors_project hangman

export const seniors_project = async (args: string[]): Promise<string> => {
  if (args.length != 1) {
    return 'Invalid arguments!\n\nUsage:\nseniors_project hangman\nseniors_project ar\n'
  }

  // ar project
  if (args[0] == 'ar') {
    window.open(`${config.ar_project_url}`);
    return 'Opening AR Project done by ' + `${config.ar_project_senior_name}` + ' ...';
  }
  
  // hangman project
  if (args[0] == 'hangman') {
    window.open(`${config.hangman_project_url}`);
    return 'Opening Hangman Project done by ' + `${config.hangman_project_senior_name}` + ' ...';
  }
    
  return 'Invalid arguments!\n\nUsage:\nseniors_project hangman\nseniors_project ar\n'
};

export const explore = async (args: string[]): Promise<string> => {
  if (args.length != 1) {
    return 'Invalid arguments!\n\nUsage:\nexplore for-loop-01\nexplore for-loop-02\n'
  }

  // for loop example 1
  if (args[0] == 'for-loop-01') {
    window.open(`${config.exlorable_for_loop_01_url}`);
    return 'Explore how output changes when you change the initialization statement, condition statement, increment statment in a for loop.';
  }
  
  // for loop example 2
  if (args[0] == 'for-loop-02') {
    window.open(`${config.exlorable_for_loop_02_url}`);
    return 'Explore what happens when you change index variable in a for loop?';
  }
    
  return 'Invalid arguments!\n\nUsage:\nexplore for-loop-01\nexplore for-loop-02\n'
};