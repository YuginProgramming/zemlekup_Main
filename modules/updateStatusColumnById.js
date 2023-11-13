import { writeGoogle, readGoogle } from '../crud.js';
import { ranges } from '../values.js';
import { logger } from '../logger/index.js'

export const updateStatusColumnById = async (status, lotId) => {
    const idsList = await readGoogle(ranges.lot_idColumn);
    console.log(idsList);
    console.log(lotId)
    const choosedLot = idsList.indexOf(lotId);
    console.log(choosedLot);
    if (choosedLot === -1 ) {
        logger.warn(`Cann't find id:${lotId} in the sheet, throught status update process`);
        return;
    } 
    await writeGoogle(ranges.statusCell(choosedLot + 1), [[status]]);  
}