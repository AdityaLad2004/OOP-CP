package com.example.demo.ComplaintController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.Entity.Complaint;
import com.example.demo.Repo.ComplaintRepository;

@RestController
@RequestMapping(value = "/api/complaints", method = RequestMethod.POST, produces = "application/json")
@CrossOrigin(origins = "http://localhost:5173/")
public class ComplaintController {

    private final ComplaintRepository complaintRepository;

    @Autowired
    public ComplaintController(ComplaintRepository complaintRepository) {
        this.complaintRepository = complaintRepository;
    }

    @PostMapping
    public Complaint submitComplaint(@RequestBody Complaint complaint) {
        return complaintRepository.save(complaint);
    }
}
