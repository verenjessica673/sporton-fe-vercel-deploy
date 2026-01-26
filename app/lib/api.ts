export async function fetchAPI<T>(
    endpoint: string,
    options?: RequestInit,
) : Promise<T> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`, {
        ...options,
        cache: options?.cache ?? 'no-store', //set no store untuk mendapatkan data realtime/update
    })

    if (!res.ok) {
        let errorMessage = `Failed to fetch data from ${endpoint}`;
        try {
            const errorData = await res.json();
            errorMessage = errorData.message || errorData.error || errorMessage;
        } catch(e) {
            console.log(e);
        }
        throw new Error(errorMessage);
    }

    return res.json();
}

export function getImageUrl(Path: string) {
    if (Path.startsWith("http"))  return Path;
    return `${process.env.NEXT_PUBLIC_API_ROOT}/${Path}`;
}

export function getAuthHeaders() {
    const token = localStorage.getItem("token");
    return {
        Authorization: `Bearer ${token}`,
    };
}