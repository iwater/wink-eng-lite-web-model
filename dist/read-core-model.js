const originalModel=require("./languages/cur/models/eng-core-web-model.json"),bufferFromBase64=function(data){let decodedData;try{decodedData=atob(data)}catch(e){throw Error("Unsupproted browser or node.js version;\n      Refer to https://developer.mozilla.org/en-US/docs/Web/API/atob#browser_compatibility for supported versions.")}var size=decodedData.length,bytes=new Uint8Array(size);for(let k=0;k<size;k+=1)bytes[k]=decodedData.charCodeAt(k);return bytes.buffer};var readModel=function(){const model=JSON.parse(JSON.stringify(originalModel));var packing=model.packing,featuresData=model.features,pos=model.pos;model.lexicon=new Uint32Array(bufferFromBase64(model.lexicon)),model.xpansions=new Uint32Array(bufferFromBase64(model.xpansions));for(const f in model.packing.layout)if(0===packing.layout[f][3]){featuresData[f].hash=Object.create(null);for(let k=0;k<featuresData[f].list.length;k+=1)featuresData[f].hash[featuresData[f].list[k]]=k}featuresData.lexeme.hash=Object.create(null);for(let k=0;k<featuresData.lexeme.list.length;k+=1)featuresData.lexeme.hash[featuresData.lexeme.list[k]]=k;const clusters=featuresData.posClusters.list;for(let k=0;k<clusters.length;k+=1)clusters[k]=new Set(clusters[k].split("_").map((e=>pos.hash[e]||0)));return model};module.exports=readModel;