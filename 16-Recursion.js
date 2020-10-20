'use strict';

function getUnsortedDeps(tree, result = []) {
    const deplist = tree['dependencies'];
    if(deplist)
        Object.keys(deplist).forEach(curr => {
            const dependency = deplist[curr];
            if(dependency['version']){
                
                let d = curr + '@' + dependency['version'];
                
                if(!result.includes(d)) {
                    result.push(d);
                    result = getUnsortedDeps(dependency, result);
                }
            }
        });
    return result;
}
    
module.exports = (tree) => getUnsortedDeps(tree).sort();
