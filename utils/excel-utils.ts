

const EXCEL_FILE = 'test-data/hrm-data.xlsx'
import XLSX from 'xlsx'

class ExcelUtils{
    static readExcelData(sheetName:string): any {

        const workbook = XLSX.readFile(EXCEL_FILE)
        const sheet = workbook.Sheets[sheetName]
        if(!sheet)
        {
            throw new Error(`Sheet ${sheetName} not found in the Excel file.`)
        }

        const data = XLSX.utils.sheet_to_json(sheet)
        return data;

    }
}

export {ExcelUtils}