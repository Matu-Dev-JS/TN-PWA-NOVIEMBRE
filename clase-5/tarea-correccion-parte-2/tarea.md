### Consigna: Crear y Gestionar un Historial Usando Programación Orientada a Objetos en TypeScript

En este ejercicio, desarrollarás un sistema de historial para registrar diferentes tipos de acciones que un usuario puede realizar en una aplicación, utilizando los principios de Programación Orientada a Objetos (POO) en TypeScript. Se implementarán clases base y derivadas, y se usará polimorfismo para manejar diversas acciones.

### Objetivos

1. **Crear una clase base `Accion`** que sirva como base para las diferentes acciones.
2. **Definir clases derivadas** que extiendan de la clase `Accion` para representar acciones específicas, como `AccionInicioSesion`, `AccionActualizacionPerfil`, `AccionCierreSesion`, `AccionCompra`, y `AccionEnvioMensaje`.
3. **Implementar una clase `Historial`** para almacenar y manejar acciones utilizando métodos avanzados de arrays como `filter` y `forEach`.
4. **Incorporar propiedades específicas** en las clases derivadas para almacenar información particular sobre las acciones.

### Requisitos

#### 1. Clase Base `Accion`
- **Propiedades**:
  - `id`: número - Identificador único de la acción.
  - `descripcion`: string - Descripción de la acción.
  - `fecha`: Date - Fecha en que se realizó la acción.
- **Métodos**:
  - `mostrarDetalle()`: Imprime en la consola los detalles de la acción.

Accion {
    id: 1,
    descripcion: "Usuario cambio preferencia de color de rojo a azul",
    fecha: "2024-08-31T12:05:00Z",
}

#### 2. Clases Derivadas (extends)

- **`AccionInicioSesion`** (hereda de `Accion`)
  - **Propiedades adicionales**:
    - `dispositivo_origen`: string - Dispositivo desde el cual se inició la sesión.
  - **Métodos**:
    - `mostrarDetalle()`: Sobrescribe para mostrar detalles específicos de inicio de sesión.

Accion {
    id: 1,
    descripcion: "Usuario inicio sesion",
    fecha: "2024-08-31T12:05:00Z",
    dispositivo_origen: "PC DELL 920"
}

- **`AccionCierreSesion`** (hereda de `Accion`)
  - **Propiedades adicionales**:
    - `dispositivo_origen`: string - Dispositivo desde el cual se cerró la sesión.
    - `tiempo_de_sesion`: number - Duración de la sesión en minutos.
  - **Métodos**:
    - `mostrarDetalle()`: Sobrescribe para mostrar detalles específicos de cierre de sesión.

- **`AccionActualizacionPerfil`** (hereda de `Accion`)
  - **Propiedades adicionales**:
    - `cambios`: `Cambio[]` - Array de objetos de tipo `Cambio`, cada uno representando un cambio realizado.
  - **Métodos**:
    - `mostrarDetalle()`: Sobrescribe para mostrar detalles específicos de actualización de perfil.

- **Clase `Cambio`** (utilizada en `AccionActualizacionPerfil`)
  - **Propiedades**:
    - `id_cambio`: number - Identificador único del cambio.
    - `valor_anterior`: string - Valor antes del cambio.
    - `nuevo_valor`: string - Valor después del cambio.
  - **Métodos**:
    - `mostrarCambio()`: Imprime los detalles del cambio.

- **`AccionCompra`** (hereda de `Accion`)
  - **Propiedades adicionales**:
    - `productos`: string[] - Array de nombres de productos comprados.
    - `total`: number - Monto total de la compra.
  - **Métodos**:
    - `mostrarDetalle()`: Sobrescribe para mostrar detalles específicos de la compra.

- **`AccionEnvioMensaje`** (hereda de `Accion`)
  - **Propiedades adicionales**:
    - `destinatario`: string - Nombre o dirección del destinatario.
    - `mensaje`: string - Contenido del mensaje.
  - **Métodos**:
    - `mostrarDetalle()`: Sobrescribe para mostrar detalles específicos del envío de mensaje.

#### 3. Clase `Historial`
- **Propiedades**:
  - `acciones`: `Accion[]` - Array que contiene todas las acciones.
- **Métodos**:
  - `agregarAccion(accion: Accion)`: Agrega una nueva acción al historial.
  - `eliminarAccionPorID(id: number)`: Elimina una acción específica del historial usando su ID.
  - `eliminarTodo()`: Elimina todas las acciones del historial.
  - `mostrarHistorial()`: Muestra en la consola todas las acciones en el historial.

Historial {
    acciones: [
        Accion {
            id: 1,
            descripcion: "Usuario inicio sesion",
            fecha: "2024-08-31T12:05:00Z",
            dispositivo_origen: "PC DELL 920"
        }
    ],
    id: 1
}

### Ejemplo de Esquema en JSON

A continuación se muestra un esquema JSON representativo del historial con objetos de cada tipo de acción:

```json
{
  "acciones": [
    {
      "id": 1,
      "descripcion": "Usuario inició sesión",
      "fecha": "2024-08-31T12:00:00Z",
      "dispositivo_origen": "PC de Escritorio"
    },
    {
      "id": 2,
      "descripcion": "Usuario actualizó su perfil",
      "fecha": "2024-08-31T12:05:00Z",
      "cambios": [
        {
          "id_cambio": 1,
          "valor_anterior": "correo@viejo.com",
          "nuevo_valor": "correo@nuevo.com"
        },
        {
          "id_cambio": 2,
          "valor_anterior": "1234",
          "nuevo_valor": "5678"
        }
      ]
    },
    {
      "id": 3,
      "descripcion": "Usuario cerró sesión",
      "fecha": "2024-08-31T12:30:00Z",
      "dispositivo_origen": "PC de Escritorio",
      "tiempo_de_sesion": 30
    },
    {
      "id": 4,
      "descripcion": "Usuario realizó una compra",
      "fecha": "2024-08-31T12:45:00Z",
      "productos": ["Laptop", "Ratón"],
      "total": 1500
    },
    {
      "id": 5,
      "descripcion": "Usuario envió un mensaje",
      "fecha": "2024-08-31T13:00:00Z",
      "destinatario": "admin@example.com",
      "mensaje": "Hola, necesito ayuda con mi cuenta."
    }
  ]
}
```