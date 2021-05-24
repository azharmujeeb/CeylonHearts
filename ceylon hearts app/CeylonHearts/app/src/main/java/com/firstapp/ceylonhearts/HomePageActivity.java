package com.firstapp.ceylonhearts;


import androidx.appcompat.app.AppCompatActivity;


import android.content.Intent;
import android.os.Bundle;

import android.view.View;

import android.widget.Button;


public class HomePageActivity extends AppCompatActivity {
    Button fundraise, donate;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home_page);


        fundraise = (Button) findViewById(R.id.fund);
        donate = (Button) findViewById(R.id.donation);

        fundraise.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                sendusertopostactvity();
            }
        });


        donate.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Sendusertopayment();
            }
        });
    }

    private void Sendusertopayment() {
        Intent rescue = new Intent(HomePageActivity.this, PaymentActivity.class);
        startActivity(rescue);
        finish();
    }


    private void sendusertopostactvity() {
        Intent post = new Intent(HomePageActivity.this, AuthenticateActivity.class);
        startActivity(post);
    }

    }




