#include<iostream >
using namespace std;

// phuong trinh ax+b = 0

main(){
	float a,b,x;
	cin>>a>>b;
	if(a==0){
		if(b==0 )	cout<<"Phuong trinh  ax+b = 0 co vo so nghiem "<<endl;
		else 		cout<<"Phuong trinh  ax+b = 0 vo nghiem "<<endl;
	}
	if(a!= 0){
		if(b==0 )	cout<<"Phuong trinh  ax+b = 0 co nghiem duy nhat x = 0  "<<endl;
		else{
			cout<<"Phuong trinh ax+b = 0 co nghiem duy nhat  la: x = "<<-b/a<<endl;
		}		
	}	
	   return 0;
}

