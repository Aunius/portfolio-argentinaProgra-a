/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.portfolio.portfolioargprog.Controller;

import com.portfolio.portfolioargprog.Entity.Experiencia;
import com.portfolio.portfolioargprog.Security.Controller.Mensaje;
import com.portfolio.portfolioargprog.Service.SExperiencia;
import java.util.List;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("explab")
@CrossOrigin("http//localhost:4200")
public class CExperiencia {
    @Autowired  
    SExperiencia sExperiencia;
    
    @GetMapping("/lista")
    public ResponseEntity<List<Experiencia>> list(){
        List<Experiencia> list = sExperiencia.list();
        return new ResponseEntity(list, HttpStatus.OK);
    }
    
      @GetMapping("/detalles{id}")
    public ResponseEntity<?> getById(@PathVariable("id")int id){
        if(!sExperiencia.existsById(id)){
            return new ResponseEntity(new Mensaje("no existe la id"), HttpStatus.BAD_REQUEST);
        }
        Experiencia experiencia = sExperiencia.getOne(id).get();
        return new ResponseEntity(experiencia, HttpStatus.OK);
    }
    
    @PostMapping("/crear")
    public ResponseEntity<?> create(@RequestBody dtoExperiencia dtoExp){
        if(StringUtils.isBlank(dtoexp.getNombreE())){
            return new ResponseEntity(new Mensaje("El nombre es requerido"),HttpStatus.BAD_REQUEST);}
        if(sExperiencia.existsByNombreE(dtoexp.getNombreE())){
            return new ResponseEntity(new Mensaje("Esa experiencia ya existe"), HttpStatus.BAD_REQUEST);}
        Experiencia experiencia = new Experiencia(dtoexp.getNombreE(), dtoexp.getDescripcionE());
        sExperiencia.save(experiencia);
        
        return new ResponseEntity(new Mensaje("Experiencia agregada"), HttpStatus.OK);
    }
    
    @PutMapping("/update/{id}")
    public ResponseEntity<?> update(@PathVariable("id") int id, @RequestBody dtoExperiencia dtoexp){
        if(!sExperiencia.existsById(id)){
            return new ResponseEntity(new Mensaje("El id no existe"), HttpStatus.BAD_REQUEST);}
        if(sExperiencia.existsByNombreE(dtoexp.getNombreE()) && sExperiencia.existsByNombreE(dtoexp.getNombreE()).get().getId() !=id){
            return new ResponseEntity(new Mensaje("Esa experiencia ya existe"), HttpStatus.BAD_REQUEST);}
        if(StringUtils.isBlank(dtoexp.getNombreE())){
            return new ResponseEntity(new Mensaje("El nombre es obligatorio"), HttpStatus.BAD_REQUEST);}
        
        Experiencia experiencia = sExperiencia.getOne(id).get();
        experiencia.setNombreE(dtoexp.getNombreE());
        experiencia.setDescripcionE(dtoexp.getDescripcionE());
        
        sExperiencia.save(experiencia);
        return new ResponseEntity(new Mensaje("Experiencia actualizada"), HttpStatus.OK);
    }
    @DeleteMapping("/borrar/{id}")
    public ResponseEntity<?> delete(@PathVariable("id")int id) {
        if(!sExperiencia.existsById(id)){
            return new ResponseEntity(new Mensaje("El id no existe"), HttpStatus.BAD_REQUEST);
        }
        sExperiencia.delete(id);
        return new ResponseEntity(new Mensaje("Experiencia borrada"), HttpStatus.OK);
    }
}
