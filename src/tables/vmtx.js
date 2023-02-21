// https://learn.microsoft.com/en-us/typography/opentype/spec/vmtx

import parse from "../parse";

// todo...
function parseVmtxTable(data, start) {
    const vmtx = [];
    const p = new parse.Parser(data, start);

    for (let i = 0; i < data.length; i++) {
        const element = data[i];
    }
    return vmtx;
}

export default {
    parse: parseVmtxTable,
};
