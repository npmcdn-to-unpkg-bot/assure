// Define App config settings
export const API_BASE_URL: string = 'https://magellan.ammatech.com.au/rest/Assure_Dev_Service';
export const API_UTILITY_URL: string = 'https://magellan.ammatech.com.au/rest/Assure_Dev_Utility';

// Individual Main Services
export const API_RFID_MONITOR_URL: string   = `${API_BASE_URL}/RfidMonitorService`;
export const API_RFID_READER_URL: string    = `${API_BASE_URL}/RfidReaderService`;
export const API_USER_PROFILE_URL: string   = `${API_BASE_URL}/UserProfileService`;

// Individual Utility Services
export const API_RFID_READER_TYPE_URL: string   = `${API_UTILITY_URL}/getRfidReaderType`;
export const API_USER_TYPE_URL: string   = `${API_UTILITY_URL}/getUserType`;
export const API_USER_STATUS_URL: string   = `${API_UTILITY_URL}/getUserStatus`;
