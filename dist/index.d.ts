import type { Compiler } from 'webpack';
import type { WebAppManifest } from 'web-app-manifest';
interface Config {
    /** Represents an object that will be validated and converted to JSON as the contents of the manifest file. */
    content: Omit<WebAppManifest, 'icons'>;
    /** An output path where the manifest file should be written. */
    destination: string;
    useDigest?: boolean;
    /** A function to determine if a webpack asset should be included as an icon in the web app manifest. The function accepts a `filename` parameter and returns true or false. */
    isAssetManifestIcon?: (filename: string) => boolean;
    /** A function to determine the icon size of any asset that passes the check `isAssetManifestIcon()`. The function accepts a `fileName` parameter and returns an object `{ width, height }`. */
    getIconSize?: (filename: string) => Dimensions;
    /** A function to determine the type of any asset that passes the check `isAssetManifestIcon()`. The function accepts a `fileName` parameter and returns a string describing the mime type of the asset, ex. "image/png". */
    getIconType?: (filename: string) => string;
}
interface Dimensions {
    width: number;
    height: number;
}
declare const _default: {
    new ({ content, destination, useDigest, isAssetManifestIcon, getIconSize, getIconType, }: Config): {
        name: string;
        content: WebAppManifest;
        destination: string;
        useDigest: NonNullable<Config['useDigest']>;
        isAssetManifestIcon: NonNullable<Config['isAssetManifestIcon']>;
        getIconSize: NonNullable<Config['getIconSize']>;
        getIconType: NonNullable<Config['getIconType']>;
        apply(compiler: Compiler): void;
    };
};
export = _default;
//# sourceMappingURL=index.d.ts.map