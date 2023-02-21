// https://learn.microsoft.com/en-us/typography/opentype/spec/vhea

import parse from "../parse";

// Parse the vhea and Windows metrics vhea table
function parseVheaTable(data, start) {
    const vhea = {};
    const p = new parse.Parser(data, start);
    vhea.version = p.parseVersion();
    vhea.vertTypoAscender = p.parseShort();
    vhea.vertTypoDescender = p.parseShort();
    vhea.vertTypoLineGap = p.parseShort();
    vhea.advanceHeightMax = p.parseShort();
    vhea.minTopSideBearing = p.parseShort();
    vhea.minBottomSideBearing = p.parseShort();
    vhea.yMaxExtent = p.parseShort();
    vhea.caretSlopeRise = p.parseShort();
    vhea.caretSlopeRun = p.parseShort();
    vhea.caretOffset = p.parseShort();
    vhea.reserved1 = p.parseFixed();
    vhea.reserved2 = p.parseShort();
    vhea.reserved3 = p.parseShort();
    vhea.reserved4 = p.parseShort();
    vhea.metricDataFormat = p.parseShort();
    vhea.numOfLongVerMetrics = p.parseUShort();

    return vhea;
}

export default {
    parse: parseVheaTable,
};
