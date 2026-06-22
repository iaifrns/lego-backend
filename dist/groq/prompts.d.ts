import { Groq } from "groq-sdk";
export declare function main(): Promise<string>;
export declare function getGroqChatCompletion(): Promise<Groq.Chat.Completions.ChatCompletion>;
export declare const joinPrompt: (commande: string) => string;
export declare function getGroqChatOtherCompletion(content: string): Promise<Groq.Chat.Completions.ChatCompletion>;
//# sourceMappingURL=prompts.d.ts.map