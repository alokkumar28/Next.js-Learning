declare global {
    interface Window {
        appVersion: string;
    }

    type ApiResponse<T> = {
        data: T;
    };

    type myName = {
        name: string;
        age: number;
    };

    type value = string | number;
}

export {};