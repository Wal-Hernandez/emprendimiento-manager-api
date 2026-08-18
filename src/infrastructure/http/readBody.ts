import { IncomingMessage } from "node:http";

export const readBody = (
    req: IncomingMessage
): Promise<string> => {
    const chunks: Buffer[] = [];

    return new Promise((resolve) => {
        req.on("data", (chunk: Buffer) => {
            chunks.push(chunk);
        });

        req.on("end", () => {
            const bodyBuffer = Buffer.concat(chunks);
            const bodyText = bodyBuffer.toString("utf8");

            resolve(bodyText);
        });
    });
};