<?php
class conectarDBO{
    public static function conexion(){
        try{
            $conexion = new PDO('mysql:host=127.0.0.1:3309;dbname=USERS;charset=utf8', 'root', '');
            $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $conexion->exec("SET CHARACTER SET UTF8");
        }catch(Exception $e){
            //  echo "Error en linea: " . $e->getLine();
                
            //  echo '<script>newToastMessage("Error al conectar", "'.$e->getMessage().'", "red", 6000)</script>';
            //    die("<br>Detalles: " . $e->getMessage());
            $conexion = false;
            echo '<script>newToastMessage("Error al conectar", "'.$e->getMessage().'", "red", 6000)</script>';
            

        }
        return $conexion;
    }
}
?>