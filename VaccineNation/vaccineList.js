function vaccineList(age, status, month) {
    const finalOutPut = []
    switch (age) {
        case '8 weeks': {
            if (!finalOutPut.includes("fiveInOne")) finalOutPut.push('fiveInOne')
            if (!finalOutPut.includes("pneumococcal")) finalOutPut.push('pneumococcal')
            if (!finalOutPut.includes("rotavirus")) finalOutPut.push('rotavirus')
            if (!finalOutPut.includes("meningitisB")) finalOutPut.push('meningitisB')
            break;
        }
        case '12 weeks': {
            if (!finalOutPut.includes("fiveInOne")) finalOutPut.push('fiveInOne')
            if (!finalOutPut.includes("rotavirus")) finalOutPut.push('rotavirus')
            break;
        }
        case '16 weeks': {
            if (!finalOutPut.includes("fiveInOne")) finalOutPut.push('fiveInOne')
            if (!finalOutPut.includes("pneumococcal")) finalOutPut.push('pneumococcal')
            if (!finalOutPut.includes("meningitisB")) finalOutPut.push('meningitisB')
            break;
        }
        case '12 months': {
            if (!finalOutPut.includes("meningitisB")) finalOutPut.push('meningitisB')
            if (!finalOutPut.includes("hibMenC")) finalOutPut.push('hibMenC')
            if (!finalOutPut.includes("measlesMumpsRubella")) finalOutPut.push('measlesMumpsRubella')
            break;
        }
        case '40 months': {
            if (!finalOutPut.includes("measlesMumpsRubella")) finalOutPut.push('measlesMumpsRubella')
            if (!finalOutPut.includes("preSchoolBooster")) finalOutPut.push('preSchoolBooster')
            break;
        }
    }
    switch (status) {
        case '8 weeks': {
            if (!finalOutPut.includes("fiveInOne")) finalOutPut.push('fiveInOne')
            if (!finalOutPut.includes("pneumococcal")) finalOutPut.push('pneumococcal')
            if (!finalOutPut.includes("rotavirus")) finalOutPut.push('rotavirus')
            if (!finalOutPut.includes("meningitisB")) finalOutPut.push('meningitisB')
            break;
        }
        case '12 weeks': {
            if (!finalOutPut.includes("fiveInOne")) finalOutPut.push('fiveInOne')
            if (!finalOutPut.includes("rotavirus")) finalOutPut.push('rotavirus')
            break;
        }
        case '16 weeks': {
            if (!finalOutPut.includes("fiveInOne")) finalOutPut.push('fiveInOne')
            if (!finalOutPut.includes("pneumococcal")) finalOutPut.push('pneumococcal')
            if (!finalOutPut.includes("meningitisB")) finalOutPut.push('meningitisB')
            break;
        }
        case '12 months': {
            if (!finalOutPut.includes("meningitisB")) finalOutPut.push('meningitisB')
            if (!finalOutPut.includes("hibMenC")) finalOutPut.push('hibMenC')
            if (!finalOutPut.includes("measlesMumpsRubella")) finalOutPut.push('measlesMumpsRubella')
            break;
        }
        case '40 months': {
            if (!finalOutPut.includes("measlesMumpsRubella")) finalOutPut.push('measlesMumpsRubella')
            if (!finalOutPut.includes("preSchoolBooster")) finalOutPut.push('preSchoolBooster')
            break;
        }
    }
    if (month === 'september' || month === 'october' || month === 'november') finalOutPut.push('offer fluVaccine')
    return finalOutPut.sort()
}
const input1 = ('12 weeks', 'up-to-date', 'december')
/* output    ['fiveInOne', 'rotavirus'] */

const input2 = ('12 months', '16 weeks', 'june')
/* output['fiveInOne', 'hibMenC', 'measlesMumpsRubella', 'meningitisB', 'pneumococcal'] */

const input3 = ('40 months', '12 months', 'october')
/* output['hibMenC', 'measlesMumpsRubella', 'meningitisB', 'offer fluVaccine', 'preSchoolBooster'] */


//fiveInOne : ['8 weeks', '12 weeks', '16 weeks'],

//pneumococcal : ['8 weeks', '16 weeks'],

//rotavirus : ['8 weeks', '12 weeks'],

//meningitisB : ['8 weeks', '16 weeks', '12 months'],

//hibMenC : ['12 months'],

//measlesMumpsRubella : ['12 months', '40 months'],

//fluVaccine : ['september','october','november'],

//preSchoolBooster : ['40 months']
