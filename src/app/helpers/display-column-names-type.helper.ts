export type DisplayColumnNameType<T extends readonly string[]> = {
    [K in T[number]]: string;
};
