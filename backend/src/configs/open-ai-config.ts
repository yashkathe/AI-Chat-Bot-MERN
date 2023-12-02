import { Configuration } from "openai"

export const configureOpenAI = () => {
    const config = new Configuration({
        apiKey:  process.env.OPEN_AI_SECRET_KEY,
        organization: process.env.OPEN_AI_ORG
    })
    return config
}