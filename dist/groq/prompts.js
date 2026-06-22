import { Groq } from "groq-sdk";
import { config } from "dotenv";
import fs from 'fs';
import path from 'path';
config();
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
export async function main() {
    const chatCompletion = await getGroqChatCompletion();
    // Print the completion returned by the LLM.
    return chatCompletion.choices[0]?.message?.content || "";
}
export async function getGroqChatCompletion() {
    return groq.chat.completions.create({
        messages: [
            {
                role: "user",
                content: "Explain the importance of fast language models",
            },
        ],
        model: "openai/gpt-oss-20b",
    });
}
export const joinPrompt = (commande) => {
    const filePath = path.join(process.cwd(), "src/groq", "prompt.txt");
    const text = fs.readFileSync(filePath);
    return text + commande;
};
export async function getGroqChatOtherCompletion(content) {
    return groq.chat.completions.create({
        messages: [
            {
                role: "system",
                content: `no comments.
        just give the direct commande without explication.
        the result should not start with js, javascript or json only the mongodb pipeline and model name.
        Result should be in json.
        the mongodb pipeline should always be complete and correct.`
            },
            {
                role: "user",
                content: content,
            },
        ],
        model: "openai/gpt-oss-20b",
    });
}
//# sourceMappingURL=prompts.js.map