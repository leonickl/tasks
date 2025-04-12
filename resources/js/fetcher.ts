export default async function fetcher({
    url,
    csrf,
    body,
}: {
    url: string;
    csrf: string;
    body: object;
}) {
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': csrf,
        },
        body: JSON.stringify(body),
    });

    const raw = await res.text();

    try {
        return JSON.parse(raw);
    } catch {
        console.error(raw);

        throw new Error('an error occured');
    }
}
