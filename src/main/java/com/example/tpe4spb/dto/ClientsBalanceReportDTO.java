package com.example.tpe4spb.dto;

import java.util.List;
import java.util.Map;
import java.util.TreeMap;

public class ClientsBalanceReportDTO {

    public TreeMap<String,Integer> clients;

    public ClientsBalanceReportDTO() {
        this.clients = new TreeMap<String,Integer>();
    }

    public ClientsBalanceReportDTO(List<ClientBalanceElemDTO> client) {
        this.clients = new TreeMap<String,Integer>();
        for (int c=0;c<client.size();c++){
                this.addClientBalance(client.get(c));
        }
    }

    public void addClientBalance(ClientBalanceElemDTO elem){
        if (clients.containsKey(elem.getName())){
           Integer newBalance=clients.get(elem.getName())+elem.getBalance();
           clients.put(elem.getName(),newBalance);
        }else{
            clients.put(elem.getName(), elem.getBalance());
        }
    }
}
