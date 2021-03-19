package com.firstapp.socialnetwork;

import androidx.annotation.NonNull;
import androidx.annotation.RequiresApi;
import androidx.appcompat.app.ActionBarDrawerToggle;
import androidx.appcompat.app.AppCompatActivity;
import androidx.drawerlayout.widget.DrawerLayout;
import androidx.recyclerview.widget.RecyclerView;

import android.content.Intent;
import android.os.Build;
import android.os.Bundle;
import android.view.MenuItem;
import androidx.appcompat.widget.Toolbar;
import android.view.View;
import android.widget.Toast;


import com.google.android.material.navigation.NavigationView;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseUser;
import com.google.firebase.database.DataSnapshot;
import com.google.firebase.database.DatabaseError;
import com.google.firebase.database.DatabaseReference;
import com.google.firebase.database.FirebaseDatabase;
import com.google.firebase.database.ValueEventListener;

public class MainActivity extends AppCompatActivity {

    private NavigationView navigationView;
    private DrawerLayout drawerLayout;
    private ActionBarDrawerToggle actionBarDrawerToggle;
    private RecyclerView postList;
    private Toolbar mtoolbar;
    private FirebaseAuth mAuth;
    private DatabaseReference UsersRef;



    @RequiresApi(api = Build.VERSION_CODES.LOLLIPOP)
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        mAuth =FirebaseAuth.getInstance();
        UsersRef= FirebaseDatabase.getInstance().getReference().child("Users");
        mtoolbar=(Toolbar) findViewById(R.id.main_app_bar);
        setSupportActionBar(mtoolbar);
        getSupportActionBar().setTitle("Home");

        drawerLayout=(DrawerLayout) findViewById(R.id.drawable_layout);
        actionBarDrawerToggle=new ActionBarDrawerToggle(MainActivity.this,drawerLayout,R.string.drawer_open,R.string.drawer_close);
        drawerLayout.addDrawerListener(actionBarDrawerToggle);
        actionBarDrawerToggle.syncState();
        getSupportActionBar().setDisplayHomeAsUpEnabled(true);
        navigationView=(NavigationView) findViewById(R.id.navigation_view);
        View navView= navigationView.inflateHeaderView(R.layout.navigation_header);

        navigationView.setNavigationItemSelectedListener(new NavigationView.OnNavigationItemSelectedListener() {
            @Override
            public boolean onNavigationItemSelected(@NonNull MenuItem item) {
                UserMenuSelector(item);
                return false;
            }
        });
    }

    @Override
    protected void onStart() {
        super.onStart();

        FirebaseUser currentUser =mAuth.getCurrentUser();

        if(currentUser == null)
        {
            sendusertologinactivity();
        }
        else
        {
            CheckUserExistence();
        }
    }



    private void CheckUserExistence()
    {
        final String currentuser =  mAuth.getCurrentUser().getUid();

        UsersRef.addValueEventListener(new ValueEventListener() {
            @Override
            public void onDataChange(@NonNull DataSnapshot dataSnapshot) {
                if (!dataSnapshot.hasChild(currentuser))
                {
                    sendUserToSetupActivity();
                }

            }

            @Override
            public void onCancelled(@NonNull DatabaseError databaseError) {

            }
        });
    }

    private void sendUserToSetupActivity() {
        Intent SetUpActivity= new Intent(MainActivity.this,SetupActivity.class);
        SetUpActivity.addFlags((Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_CLEAR_TASK));
        startActivity(SetUpActivity);
        finish();
    }


    private void sendusertologinactivity() {
        Intent LoginIntent = new Intent(MainActivity.this, LoginActivity.class);
        LoginIntent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_CLEAR_TASK);
        startActivity(LoginIntent);
        finish();
    }

    @Override
    public boolean onOptionsItemSelected(@NonNull MenuItem item)
    {
        if (actionBarDrawerToggle.onOptionsItemSelected(item))
        {
            return true;
        }
        return super.onOptionsItemSelected(item);
    }

    private void UserMenuSelector(MenuItem item) {
        switch (item.getItemId()){
            case R.id.nav_home:
                Toast.makeText(this, "Home", Toast.LENGTH_SHORT).show();
                break;

            case R.id.profile:
                Toast.makeText(this, "Profile", Toast.LENGTH_SHORT).show();
                break;

            case R.id.fund:
                Toast.makeText(this, "Start A Fundraiser", Toast.LENGTH_SHORT).show();
                break;

            case R.id.search:
                Toast.makeText(this, "Search For charities", Toast.LENGTH_SHORT).show();
                break;

            case R.id.Contact_Us:
                Toast.makeText(this, "Conatct Us", Toast.LENGTH_SHORT).show();
                break;

            case R.id.Payment:
                Toast.makeText(this, "Payment Method", Toast.LENGTH_SHORT).show();
                break;

            case R.id.logout:
                mAuth.signOut();
                sendusertologinactivity();
                break;
        }
    }
}