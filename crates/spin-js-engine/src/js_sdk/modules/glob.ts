declare global {
    function glob(globString: string): Array<string>
}

declare const _glob: {
    get:(arg0: string) => Array<string>
}

export function glob(globString: string) {
    return _glob.get(globString)
}