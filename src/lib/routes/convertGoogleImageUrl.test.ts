import { convertImageUrlFromGoogleDrive } from './convertUrlFromGoogleDrive';
import { describe, expect, it } from 'vitest';
describe('Name of the group', () => {
    it('should convert url from googledrive to image', () => {
        const input =
            'https://drive.google.com/file/d/1ETgCDrriMudyCna_QYb6d-jlTgiF3c74/view?usp=sharing';
        const expected =
            'https://drive.google.com/thumbnail?id=1ETgCDrriMudyCna_QYb6d-jlTgiF3c74&sz=w1000';
        expect(convertImageUrlFromGoogleDrive(input, 1000)).toBe(expected);
    });
});
