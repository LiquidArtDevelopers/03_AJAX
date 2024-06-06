<div class="contenedor-tabla">
<table>
   <thead>
    <tr>
            <th>Id Usuario</th>
            <th>Nombre</th>
            <th>Teléfono</th>
            <th>Email</th>
            <th>Fecha de alta</th>
            <th>Rol</th>
        </tr>
   </thead>

   <tbody>
    <?php
        $con=mysqli_connect("localhost","igor_dbo","Areafor@01","igor_db");
        $sql="SELECT * FROM usuarios INNER JOIN roles WHERE usuarios.id_rol=roles.id_rol";
        $resultado=mysqli_query($con,$sql);
        if(mysqli_num_rows($resultado)>0){
            while($fila = mysqli_fetch_array(($resultado))){        
        ?>
        <tr>
            <td><?=$fila['id_usuario']?></td>
            <td><?=$fila['nombre']?></td>
            <td><?=$fila['telefono']?></td>
            <td><?=$fila['email']?></td>
            <td><?=$fila['fecha_alta']?></td>
            <td><?=$fila['rol']?></td>
        </tr>
        <?php
            }
        }
    ?>
   </tbody>
</table>
</div>