#include<iostream >
#include<math.h>
using namespace std;

//Giai va bien luan phuong trinh bac 2 : ax^2 + bx+ c = 0

main(){
	float a,b,c,x1,x2,delta;
	cin>>a>>b>>c;
	if(a==0){
		cout<<"Phuong trinh tro thanh bx +c = 0"<<endl;
		if(b==0){
			if(c==0)	cout<<"Phuong trinh bx+c = 0 co vo so nghiem "<<endl;
			else	cout<<"Phuong trinh  bx+c = 0 vo nghiem "<<endl;
		}
		
		if(b!= 0){
			if(c==0)	cout<<"Phuong trinh bx+c = 0 co nghiem duy nhat x = 0 "<<endl;
			else 	cout<<"Phuong trinh bx+c = 0 co nghiem duy nhat  la: x = "<<-c/b<<endl;
		
		}	
	}
	if(a!=0){
		delta = b*b- 4*a*c;
		if(delta> 0){
			
			x1 = (-b-sqrt(delta))/2*a;
			x2 = (-b+sqrt(delta))/2*a;
			cout<<"Phuong trinh co 2 nghiem phan biet: x1 = "<<x1<<" va x2= "<<x2<<endl;
		}	
		else if(delta<0)	cout<<"Phuong trinh vo nghiem"<<endl;
		else cout<<"Phuong trinh co nghiem kep x1 = x2 = "<<-b/2*a<<endl;
	}
}
	

