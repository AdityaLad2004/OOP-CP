package complaint.management.system;

import javax.swing.*;
import java.awt.*;
import java.sql.*;
import net.proteanit.sql.DbUtils;
import java.awt.event.*;

public class ViewComplaint extends JFrame implements ActionListener{

    JTable table;
    Choice cComplaintId;
    JButton search, print, update, back;
    
    ViewComplaint() {
        
        getContentPane().setBackground(Color.WHITE);
        setLayout(null);
        
        
        
        
        
        try {
            Conn c = new Conn();
            ResultSet rs = c.s.executeQuery("select * complaints");
            while(rs.next()) {
                cComplaintId.add(rs.getString("empId"));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        
        table = new JTable();
        
        try {
            Conn c = new Conn();
            ResultSet rs = c.s.executeQuery("select * from complaints");
            table.setModel(DbUtils.resultSetToTableModel(rs));
        } catch (Exception e) {
            e.printStackTrace();
        }
        
        JScrollPane jsp = new JScrollPane(table);
        jsp.setBounds(0, 100, 900, 600);
        add(jsp);
        
        
        
        back = new JButton("Back");
        back.setBounds(320, 70, 80, 20);
        back.addActionListener(this);
        add(back);
        
        setSize(900, 700);
        setLocation(300, 100);
        setVisible(true);
    }
    
    public void actionPerformed(ActionEvent ae) {
         if (ae.getSource() == update) {
            setVisible(false);
            
        } else {
            setVisible(false);
            new Home();
        }
    }

    public static void main(String[] args) {
        new ViewComplaint();
    }
}
