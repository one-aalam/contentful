import fs from 'fs';
import path from 'path';
import { createClient } from 'contentful';


const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})

const contentTypes = [
    'course'
]

export const getContent = async () => {
    console.log('> Starting import...');
    for (const contentType of contentTypes) {
        console.log('Getting content for: ', contentType);
        const entries = await client.getEntries({
            content_type: contentType
        })
        if (entries.total === 1) {
            const fields = entries.items[0];
            fs.writeFileSync(
                path.join(__dirname, '..', 'data', `${contentType}.json`),
                JSON.stringify(fields)
            );
            console.log('Retrievied and written content for', contentType);
        }
    }
    return true;
}

if (process.argv[2] === 'install') {
    getContent();
}
