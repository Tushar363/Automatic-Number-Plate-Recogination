from licensePlateDetection.Database.database import ANPD_DB
from bson import json_util
import json

dbs = ANPD_DB("ANPD","anpr_data")
print("connected")
a = dbs.get_vehicle_by_registration_number("UP32LC1224")
print(type(a))
a1 = json.loads(json_util.dumps(a))
print(type(a1))
print("data done")