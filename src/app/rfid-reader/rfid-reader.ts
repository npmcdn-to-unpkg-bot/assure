export class RfidReader {

  constructor(
    public rfid_reader_id: number,
    public rfid_reader_code: string,
    public rfid_reader_type_id: number,
    public description: string,
    public ip_address: string,
    public subnet_mask: string,
    public serial_number: string,
    public customer_identifier: string,
    public reader_server_version: string,
    public reader_os_version: string,
    public reader_data_version: string,
    public reader_model: string,
    public reader_version: string,
    public rfid_monitor_id: number,
    public entity_id: number,
    public insert_user_id: number,
    public update_user_id: number
  ) {  }

}

