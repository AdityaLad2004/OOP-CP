package com.example.demo.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.Complaint;

public interface ComplaintRepository extends JpaRepository<Complaint, Integer> {

}
