#include<iostream >
using namespace std;
main(){
	float max;
	float x[4];
	for(int i=1;i<=4;i++){
		cin>>x[i];
	}
	max = 0; 
	for(int i=1;i<=4;i++){	
		if(x[i]> max)	max= x[i];
	}
	
	if(max== x[1] )	cout<<"Khong co so lon nhat"<<endl;
	else cout<<"Gia tri lon nhat la: "<<max<<endl;
	 return 0;
}

