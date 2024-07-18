import React from 'react'

export function deepCopy(obj) {
    let copiedObject = obj;

    if (obj && typeof obj === "object") {
        copiedObject = Array.isArray(obj) ? [] : {};
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (obj[key] && typeof obj[key] === "object") {
                    copiedObject[key] = deepCopy(obj[key]);
                } else {
                    copiedObject[key] = obj[key];
                }
            }
        }
    }

    return copiedObject;
}
