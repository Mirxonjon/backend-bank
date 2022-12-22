CREATE DATEBASE "imtihon1"

CREATE EXTENSION pgcrypto;
CREATE EXTENSION "uuid-ossp";

CREATE TABLE admins(
  uuid_id uuid DEFAULT uuid_generate_v4() PRIMARY KEY NOT NULL,
  admin_name varchar(64) NOT NULL UNIQUE,
  password varchar(130)
);

CREATE TABLE companies(
  company_id uuid DEFAULT uuid_generate_v4() PRIMARY KEY NOT NULL,
  company_name varchar(64) NOT NULL UNIQUE,
  company_img varchar(125) NOT NULL
);

CREATE TABLE  projects(
  project_id uuid DEFAULT uuid_generate_v4() PRIMARY KEY NOT NULL,
  project_name varchar(124) NOT NULL,
  company_id uuid REFERENCES companies(company_id) ON DELETE SET NULL
);

CREATE TABLE rooms(
  room_id uuid DEFAULT uuid_generate_v4() PRIMARY KEY NOT NULL,
  room_number int NOT NULL,
  meter_square int NOT NULL,
  price_meter_square bigint NOT NULL,
  address varchar(124) NOT NULL,
  project_id uuid REFERENCES projects(project_id) ON DELETE SET NULL
);

CREATE TABLE banks(
  bank_id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  bank_name varchar(124) NOT NULL,
  upto bigint NOT NULL,
  Mortage_duration int NOT NULL,
  starting_payment int NOT NULL
);


INSERT INTO  admins(admin_name , password) VALUES('Eshmat' , crypt('123'  , gen_salt('bf') ));



-- promise

-- bank

CREATE OR REPLACE PROCEDURE addbank(
  bank_name varchar(124) ,  upto bigint, Mortage_duration int, starting_payment int
  )
LANGUAGE plpgsql

AS
$$

BEGIN
      INSERT INTO banks(bank_name ,upto , Mortage_duration , starting_payment)
       VALUES(bank_name, upto , Mortage_duration , starting_payment);
END
$$;


CREATE OR REPLACE PROCEDURE Updatebank(
  name varchar(124) ,  upto_price bigint, Mortage_d int, initial_payment int ,id uuid
  )
LANGUAGE plpgsql

AS
$$

BEGIN

      UPDATE banks 
        SET bank_name = CASE 
                          WHEN name IS NULL OR name = ''
                             THEN bank_name
                     ELSE name
                END ,
            upto = CASE 
                              WHEN upto_price IS NULL 
                              THEN upto
                       ELSE  upto_price
                END ,
            Mortage_duration = CASE 
                              WHEN Mortage_d IS NULL 
                              THEN Mortage_duration
                        ELSE  Mortage_d 
                END ,
            starting_payment = CASE 
                              WHEN initial_payment IS NULL 
                              THEN starting_payment
                        ELSE  initial_payment
                END 
          WHERE bank_id = id;
      
END
$$;



CREATE OR REPLACE PROCEDURE deleteBank( id uuid)
LANGUAGE plpgsql

AS
$$

BEGIN

      DELETE FROM  banks WHERE bank_id = id; 

END
$$;



-- company 

CREATE OR REPLACE PROCEDURE addCompany(name varchar(64) , img varchar(125))
LANGUAGE plpgsql

AS
$$

BEGIN
      INSERT INTO companies(company_name ,company_img)
       VALUES(name , img);
END
$$;


CREATE OR REPLACE PROCEDURE updateCompany(name varchar(64) , img varchar(125) ,id uuid)
LANGUAGE plpgsql

AS
$$

BEGIN
   

   UPDATE companies
        SET company_name = CASE 
                          WHEN name IS NULL OR name = ''
                            THEN company_name
                     ELSE name
                END ,
            company_img = CASE 
                          WHEN img IS NULL OR img =''
                            THEN company_img
                       ELSE  img
                END 
          WHERE company_id = id;
END
$$;

CREATE OR REPLACE PROCEDURE deleteCompany( id uuid)
LANGUAGE plpgsql

AS
$$

BEGIN

      DELETE FROM  companies WHERE company_id = id; 

END
$$;

-- project


CREATE OR REPLACE PROCEDURE addProject(name varchar(124) , company uuid)
LANGUAGE plpgsql

AS
$$

BEGIN
      INSERT INTO projects(project_name,company_id)
       VALUES(name , company);
END
$$;



CREATE OR REPLACE PROCEDURE updateProject(name varchar(124) , company uuid ,id uuid)
LANGUAGE plpgsql

AS
$$

BEGIN
   

   UPDATE projects
        SET project_name = CASE 
                          WHEN name IS NULL OR name = ''
                            THEN project_name
                     ELSE name
                END ,
            company_id = CASE 
                          WHEN company IS NULL
                            THEN company_id
                       ELSE  company
                END 
          WHERE project_id = id;
END
$$;



CREATE OR REPLACE PROCEDURE deleteProject( id uuid)
LANGUAGE plpgsql

AS
$$

BEGIN

      DELETE FROM  projects WHERE project_id = id; 

END
$$;

-- rooms



CREATE OR REPLACE PROCEDURE addRoom(roomNumber int , meterSquare int , price bigint, addressRoom varchar(124) , project uuid)
LANGUAGE plpgsql

AS
$$

BEGIN
      INSERT INTO rooms(room_number,meter_square ,price_meter_square , address , project_id)
       VALUES(roomNumber ,meterSquare , price , addressRoom , project);
END
$$;



CREATE OR REPLACE PROCEDURE updateRoom(roomNumber int , meterSquare int , price bigint, addressRoom varchar(124) , project uuid ,id uuid)
LANGUAGE plpgsql
AS
$$

BEGIN
   
   UPDATE rooms
        SET room_number = CASE 
                          WHEN roomNumber IS NULL 
                            THEN room_number
                     ELSE roomNumber
                END ,
            meter_square = CASE 
                          WHEN meterSquare IS NULL
                            THEN meter_square
                       ELSE  meterSquare
                END ,
            price_meter_square = CASE 
                          WHEN price IS NULL
                            THEN price_meter_square
                       ELSE  price
                END ,
            address = CASE 
                          WHEN addressRoom IS NULL OR addressRoom = ''
                            THEN address
                       ELSE  addressRoom
                END ,
            project_id = CASE 
                          WHEN project IS NULL
                            THEN project_id
                       ELSE  project
                END 
          WHERE room_id = id;
END
$$;

CREATE OR REPLACE PROCEDURE deleteRoom( id uuid)
LANGUAGE plpgsql

AS
$$

BEGIN

      DELETE FROM  rooms WHERE room_id = id; 

END
$$;






