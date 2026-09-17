export const name = "Mukhamad Khafid Maassobirin";
export const linkedin_username = "mkhafidm";
export const github_username = "mkhafidm";

// Email is Base64 encoded to obfuscate it in the source code.
// To update it, run: echo -n 'your@email.com' | base64
const email_base64_encoded = "bWtoYWZpZDA1MDJAZ21haWwuY29t";

export const email = atob(email_base64_encoded);

// Helper code for creating URLs from the username data above.
export const linkedin_short = `linkedin.com/in/${linkedin_username}`;
export const linkedin_url   = `https://www.linkedin.com/in/${linkedin_username}`;
export const github_short   = `github.com/${github_username}`;
export const github_url = `https://github.com/${github_username}`;