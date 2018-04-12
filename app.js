//var XmlWriter = require('../lib/simple-xml-writer.js').XmlWriter;

function generateXML(info) {
    return new XmlWriter(function (el) {
        el('ClinicalDocument', function (el, at) {
            at('xmlns:xsi', 'http://www.w3.org/2001/XMLSchema-instance');
            at('xmlns:voc', 'http://www.lantanagroup.com/voc');
            at('xmlns', 'urn:hl7-org:v3');
            at('xmlns:cda', 'urn:hl7-org:v3');
            at('xmlns:sdtc', 'urn:hl7-org:sdtc');
            at('xsi:schemaLocation', 'urn:hl7-org:v3 ../../schema/infrastructure/cda/CDA_SDTC.xsd');
            el('realmCode', function (el, at) {
                at('code', info.realmCode.code)
            });
            el('typeId', function (el, at) {
                at('extension', "POCD_HD000040");
                at('root', "2.16.840.1.113883.1.3");
            });
            el('realmCode', function (el, at, text) {
                at('code', "US")
                text("element text")
                text("element text2")
            });

            el('recordTarget', function (el, at) {
                el('patientRole', function (el, at) {

                })
            })
        });
    }, { addDeclaration: true });
}
var xmlOutPut = new generateXML({
    realmCode: {
        code: "US"
    }
})
console.log(xmlOutPut.toString());