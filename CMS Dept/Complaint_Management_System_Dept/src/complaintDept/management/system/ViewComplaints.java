package complaintDept.management.system;

import javax.swing.*;
import java.awt.*;
import java.sql.*;
import net.proteanit.sql.DbUtils;
import java.awt.event.*;

public class ViewComplaints extends JFrame implements ActionListener{

    JTable table;
    Choice ccomplaintId;
    JButton search, print, update, back,showall,upS;
    
    ViewComplaints() {
        
        getContentPane().setBackground(Color.WHITE);
        setLayout(null);
        
        JLabel searchlbl = new JLabel("Search by Complaint Id");
        searchlbl.setBounds(20, 20, 150, 20);
        add(searchlbl);
        
        ccomplaintId = new Choice();
        ccomplaintId.setBounds(180, 20, 150, 20);
        add(ccomplaintId);
        
        
        
        
        
        try {
            Conn c = new Conn();
            ResultSet rs = c.s.executeQuery("select * from complaints");
            while(rs.next()) {
                ccomplaintId.add(rs.getString("cmpId"));
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
        
        search = new JButton("Search");
        search.setBounds(20, 70, 80, 20);
        search.addActionListener(this);
        add(search);
        
        print = new JButton("Print");
        print.setBounds(120, 70, 80, 20);
        print.addActionListener(this);
        add(print);
        
        update = new JButton("Update");
        update.setBounds(220, 70, 80, 20);
        update.addActionListener(this);
        add(update);
        
        back = new JButton("Back");
        back.setBounds(320, 70, 80, 20);
        back.addActionListener(this);
        add(back);
        
        showall = new JButton("Show all");
        showall.setBounds(420, 70, 80, 20);
        showall.addActionListener(this);
        add(showall);
        
        
        upS = new JButton("Update status");
        upS.setBounds(520, 70, 80, 20);
        upS.addActionListener(this);
        add(upS);
        
        setSize(900, 700);
        setLocation(300, 100);
        setVisible(true);
    }
    
    public void actionPerformed(ActionEvent ae) {
        if (ae.getSource() == search) {
            String query = "select * from complaints where cmpId = '"+ccomplaintId.getSelectedItem()+"'";
            try {
                Conn c = new Conn();
                ResultSet rs = c.s.executeQuery(query);
                table.setModel(DbUtils.resultSetToTableModel(rs));
            } catch (Exception e) {
                e.printStackTrace();
            }
        } else if (ae.getSource() == print) {
            try {
                table.print();
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
         else if (ae.getSource() == showall) {
            String query = "select * from complaints";
            try {
                Conn c = new Conn();
                ResultSet rs = c.s.executeQuery(query);
                table.setModel(DbUtils.resultSetToTableModel(rs));
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
         
         else if(ae.getSource()==upS){
             String query = "UPDATE complaints SET status = 'resolved' WHERE cmpId = '" + ccomplaintId + "'";
            try {
                Conn c = new Conn();
                ResultSet rs = c.s.executeQuery(query);
                table.setModel(DbUtils.resultSetToTableModel(rs));
            } catch (Exception e) {
                e.printStackTrace();
            }
         }
        
        else {
            setVisible(false);
            new Home();
        }
    }

    public static void main(String[] args) {
        new ViewComplaints();
    }
}
