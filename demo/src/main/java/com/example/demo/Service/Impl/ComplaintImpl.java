package com.example.demo.Service.Impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.ComplaintDTO.ComplaintDTO;
import com.example.demo.Entity.Complaint;
import com.example.demo.Repo.ComplaintRepository;
import com.example.demo.Service.ComplaintService;

@Service
public class ComplaintImpl implements ComplaintService {
    @Autowired
    private ComplaintRepository complaintRepo;

    @Override
    public String addComplaint(ComplaintDTO complaintDTO) {
        Complaint complaint = new Complaint(
                complaintDTO.getId(),
                complaintDTO.getName(),
                complaintDTO.getDepartment(),
                complaintDTO.getComplaintTitle(),
                complaintDTO.getLocation()

        );

        complaintRepo.save(complaint);

        return complaint.getName();
    }

}
