/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package roamweatherapp;

import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.stage.Stage;

/**
 *
 * @author ethan
 */

public class RunRoamWeatherApp extends Application{

    public static void main(String[] args) {
        launch(args);
    }

    @Override
    public void start(Stage stage) throws Exception {
        //
        Parent home =  FXMLLoader.load(getClass().getResource("Homepage.fxml"));
        Scene scnHome = new Scene(home);
        
        stage.setScene(scnHome);
        stage.show();
    }
    
}
