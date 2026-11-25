Method	    URL	                Anlamı	                        Başarılı status     	Hata status
GET     	/api/events	        Tüm etkinlikleri listele	          200	
GET     	/api/events/2	    Tek etkinlik	                      200	                404
POST	    /api/events      	Yeni etkinlik oluştur	              201	                400
PUT	        /api/events/2	    2 numaralı etkinliği güncelle         200	                404
DELETE   	/api/events/2	    2 numaralı etkinliği sil	          204	                404             