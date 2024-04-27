package complaint.management.system;

import java.awt.*;
import javax.swing.*;
import java.awt.event.*;
import java.util.Random;

public class AddComplaint extends JFrame implements ActionListener {

    Random ran = new Random();
    int number = ran.nextInt(999999);

    JTextField tfname, tfaddress, tfaadhar, tfdetail;
    JComboBox<String> cdept;
    JLabel lblcmpId;

    JButton add, back;

    AddComplaint() {
        getContentPane().setBackground(Color.WHITE);
        setLayout(null);

        JLabel heading = new JLabel("Add Complaint Detail");
        heading.setBounds(320, 30, 500, 50);
        heading.setFont(new Font("SAN_SERIF", Font.BOLD, 25));
        add(heading);

        JLabel labelname = new JLabel("Name:");
        labelname.setBounds(50, 100, 100, 30);
        labelname.setFont(new Font("serif", Font.PLAIN, 20));
        add(labelname);

        tfname = new JTextField();
        tfname.setBounds(200, 100, 150, 30);
        add(tfname);

        JLabel labeladdress = new JLabel("Address:");
        labeladdress.setBounds(50, 150, 100, 30);
        labeladdress.setFont(new Font("serif", Font.PLAIN, 20));
        add(labeladdress);

        tfaddress = new JTextField();
        tfaddress.setBounds(200, 150, 150, 30);
        add(tfaddress);

        JLabel labeldept = new JLabel("Complaint Department:");
        labeldept.setBounds(400, 100, 200, 30);
        labeldept.setFont(new Font("serif", Font.PLAIN, 20));
        add(labeldept);

        String depts[] = { "Garbage Department", "Transportation Department", "Water Department",
                "Electricity Department" };
        cdept = new JComboBox<String>(depts);
        cdept.setBackground(Color.WHITE);
        cdept.setBounds(600, 100, 200, 30);
        add(cdept);

        JLabel labelaadhar = new JLabel("Aadhar Number:");
        labelaadhar.setBounds(400, 150, 150, 30);
        labelaadhar.setFont(new Font("serif", Font.PLAIN, 20));
        add(labelaadhar);

        tfaadhar = new JTextField();
        tfaadhar.setBounds(600, 150, 200, 30);
        add(tfaadhar);

        JLabel labelcmpId = new JLabel("Complaint ID:");
        labelcmpId.setBounds(50, 200, 150, 30);
        labelcmpId.setFont(new Font("serif", Font.PLAIN, 20));
        add(labelcmpId);

        lblcmpId = new JLabel("" + number);
        lblcmpId.setBounds(200, 200, 100, 30);
        lblcmpId.setFont(new Font("serif", Font.PLAIN, 20));
        add(lblcmpId);

        JLabel labeldetail = new JLabel("Detailed Complaint:");
        labeldetail.setBounds(400, 200, 150, 30);
        labeldetail.setFont(new Font("serif", Font.PLAIN, 20));
        add(labeldetail);

        tfdetail = new JTextField();
        tfdetail.setBounds(600, 200, 200, 30);
        add(tfdetail);

        add = new JButton("Add Details");
        add.setBounds(250, 250, 150, 40);
        add.addActionListener(this);
        add.setBackground(Color.BLACK);
        add.setForeground(Color.WHITE);
        add(add);

        back = new JButton("Back");
        back.setBounds(450, 250, 150, 40);
        back.addActionListener(this);
        back.setBackground(Color.BLACK);
        back.setForeground(Color.WHITE);
        add(back);

        setSize(900, 350);
        setLocation(300, 50);
        setVisible(true);
    }

    public void actionPerformed(ActionEvent ae) {
        if (ae.getSource() == add) {
            String name = tfname.getText();
            String address = tfaddress.getText();
            String aadhar = tfaadhar.getText();
            String dept = (String) cdept.getSelectedItem();
            String cmpId = lblcmpId.getText();
            String detail = tfdetail.getText();
            String status="Initialized";

            try{
                Conn conn=new Conn();
                String query="insert into complaints values('"+name+"','"+address+"','"+aadhar+"','"+dept+"','"+cmpId+"','"+detail+"','"+status+"')";
                conn.s.executeUpdate(query);
                JOptionPane.showMessageDialog(null,"Complaints Added Successfully!!");
                setVisible(false);
                new Home();
            }
            
            catch (Exception e){
                e.printStackTrace();
            }
            
        } 
        
        else if(ae.getSource() == back){
            new Home();
        }
    }

    public static void main(String[] args) {
        new AddComplaint();
    }
}

