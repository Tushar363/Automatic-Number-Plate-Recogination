from licensePlateDetection.Database.database import ANPD_DB

dbs = ANPD_DB("ANPD","anpr_data")
print("connected")
a = dbs.get_vehicle_by_registration_number("UP32LC1224")
print(a)
print("data done")