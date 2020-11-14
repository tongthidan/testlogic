#include<bits/stdc++.h>
#include<math.h>
using namespace std;
int check ;
void sinh(int n, int k, int a[]){
	int i = k;
	while( i > 0 && a[i] == n-k +i)	i--;
	if(i == 0 )	check = 1;
	else{
		a[i ] = a[i] + 1;
		for(int j = i+1; j <=k; j++){
			a[j] = a[i] +j - i;
		}
	}
}
main(){
	int n,k, t;
	cin>>t;
	while(t--){
		cin>>n>>k;
		int a[n+1], kt[n + 1];
		check = 0;
		for(int i = 1; i <= n; i++){
			kt[i] = 0;
		}
		for(int i = 1; i <= k; i++){
			cin>>a[i];
			kt[a[i]] = 1;
		}
		sinh(n,k,a);
		if(check == 1){
			cout<<k<<endl;
		}
		else{
			int dem = 0;
			for(int i = 1; i <= k; i++){
				if(kt[a[i]] == 0){
					dem++;
				}
			}	
			cout<<dem<<endl;
		}
	}
	
	

	return 0;
}

